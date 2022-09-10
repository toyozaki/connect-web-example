import {
  createConnectTransport,
  createPromiseClient,
  PromiseClient,
} from "@bufbuild/connect-web";
import { ServiceType } from "@bufbuild/protobuf";
import { useMemo } from "react";

const transport = createConnectTransport({
  baseUrl: "https://demo.connect.build",
});

export const useClient = <T extends ServiceType>(
  service: T
): PromiseClient<T> => {
  return useMemo(() => createPromiseClient(service, transport), [service]);
};
