import { staticRedirects } from "./_redirect-map.js";

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const { pathname } = url;

  // 规则1：如果路径名有末尾的斜杠（并且不是根目录），则重定向到无斜杠版本。
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const destination = url.href.slice(0, -1);
    return Response.redirect(destination, 301);
  }

  // 规则2：如果路径包含大写字母，则重定向到小写版本。
  if (pathname !== pathname.toLowerCase()) {
    const destination = new URL(url.href);
    destination.pathname = pathname.toLowerCase();
    return Response.redirect(destination.href, 301);
  }

  // 规则3：处理来自映射的静态重定向。
  // 此时的 pathname 已经是规范化（无尾部斜杠、全小写）的了。
  if (pathname in staticRedirects) {
    const destination = staticRedirects[pathname];
    return Response.redirect(destination, 301);
  }

  // 规则4：移除 .html 扩展名。
  if (pathname.endsWith(".html")) {
    const destination = new URL(url.href);
    destination.pathname = pathname.slice(0, -5);
    return Response.redirect(destination.href, 301);
  }

  // 如果没有规则匹配，则继续访问请求的页面。
  // 在返回响应前，添加一个自定义的调试头，以验证中间件是否运行。
  const response = await context.next();
  response.headers.set("X-Debug-Middleware-Ran", "Yes");
  return response;
}
