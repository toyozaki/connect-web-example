import { ConnectError, connectErrorDetails } from "@bufbuild/connect-web";
import { LocalizedMessage } from "../gen/google/rpc/error_details_pb";

// Decode the details from an error using connectErrorDetails
export const localizedError = (err: ConnectError) => {
  const localized = connectErrorDetails(err, LocalizedMessage).find(
    (i) => i.locale === navigator.language
  );
  console.log(localized?.message);
};
