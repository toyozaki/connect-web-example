import { Interceptor } from "@bufbuild/connect-web";

export const logger: Interceptor = (next) => async (req) => {
  console.log(`sending message to ${req.url}`);
  const res = await next(req);

  if (res.stream) {
    // streaming responseをinterceptする場合は、readメソッドをオーバライドする
    return {
      ...res,
      async read() {
        console.log("streaming message received");
        return await res.read();
      },
    };
  }

  console.log("message:", res.message);
  return res;
};
