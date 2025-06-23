import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// 由于我们使用的是 ES 模块，__dirname 在这里不可用。
// 这是获取当前脚本所在目录的标准方法。
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义项目根目录，以及源文件和目标文件的路径
const projectRoot = path.resolve(__dirname, "..");
const sourceMapPath = path.resolve(
  projectRoot,
  "functions/_redirect-map.js"
);
const targetJsPath = path.resolve(projectRoot, "static/js/redirects.js");

async function generateRedirectScript() {
  try {
    // 动态导入源重定向地图
    // 我们在路径后附加一个时间戳，以绕过 Node.js 的模块缓存
    // 修正：在 Windows 上，我们需要将文件路径转换为合法的 file:// URL
    const sourceMapURL = `${pathToFileURL(sourceMapPath).href}?v=${Date.now()}`;
    const redirectMapModule = await import(sourceMapURL);
    const { staticRedirects } = redirectMapModule;

    // 将重定向对象转换为格式化的 JSON 字符串
    const redirectsJson = JSON.stringify(staticRedirects, null, 2);

    // 这是将嵌入到目标文件中的客户端 JavaScript 模板。
    // 它包含了之前我们手动创建的所有逻辑。
    const scriptTemplate = `(function () {
  /**
   * @type {Record<string, string>}
   */
  const staticRedirects = ${redirectsJson};

  const { pathname, href } = window.location;

  // 规则 1：如果路径名有末尾的斜杠（并且不是根目录），则重定向到无斜杠版本。
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const destination = href.slice(0, -1);
    window.location.replace(destination);
    return;
  }

  // 规则 2：如果路径包含大写字母，则重定向到小写版本。
  if (pathname !== pathname.toLowerCase()) {
    const destination = new URL(href);
    destination.pathname = pathname.toLowerCase();
    window.location.replace(destination.href);
    return;
  }

  // 规则 3：处理来自映射的静态重定向。
  // 此时的 pathname 已经是规范化（无尾部斜杠、全小写）的了。
  if (staticRedirects.hasOwnProperty(pathname)) {
    const destination = staticRedirects[pathname];
    window.location.replace(destination);
    return;
  }

  // 规则 4：移除 .html 扩展名。
  if (pathname.endsWith(".html")) {
    const destination = new URL(href);
    destination.pathname = pathname.slice(0, -5);
    window.location.replace(destination.href);
    return;
  }
})();
`;

    // 确保目标目录存在
    fs.mkdirSync(path.dirname(targetJsPath), { recursive: true });
    // 将生成的脚本内容写入目标文件
    fs.writeFileSync(targetJsPath, scriptTemplate, "utf8");

    console.log("✅ Redirect script generated successfully!");
    console.log(`   Source: ${path.relative(projectRoot, sourceMapPath)}`);
    console.log(`   Target: ${path.relative(projectRoot, targetJsPath)}`);
  } catch (error) {
    console.error("❌ Failed to generate redirect script:", error);
    process.exit(1); // 以错误码退出
  }
}

// 执行生成函数
generateRedirectScript();