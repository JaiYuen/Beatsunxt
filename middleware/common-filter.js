export default function (context) {
    console.log('[common-filter]',context);
    context.userAgent = process.server
      ? context.req.headers['user-agent']
      : navigator.userAgent
}