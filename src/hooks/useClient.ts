import {
  createConnectTransport,
  createPromiseClient,
  PromiseClient,
} from "@bufbuild/connect-web";
import { ServiceType } from "@bufbuild/protobuf";
import { useMemo } from "react";
import { logger } from "../utils/interceptor";

// gRPC-webを使う時は, createGrpcWebTransportを用いる
const transport = createConnectTransport({
  baseUrl: "https://demo.connect.build",
  interceptors: [logger]
});

export const useClient = <T extends ServiceType>(
  service: T
): PromiseClient<T> => {
  return useMemo(() => createPromiseClient(service, transport), [service]);
};
