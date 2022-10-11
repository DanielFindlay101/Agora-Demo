import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "902b2e809ca54994ba1af501720d3c0f";
const token =
  "007eJxTYAiT9pN8Y/Pt2EcL36WXd5lftS4/39ZsYvrbSSvqn/Yn39kKDObGyckmqaaphomGxiZppiYWRmnmScYmhkaJFobGxuamVaWuyb+OuSXbr1RlZWSAQBCfhSE3MTOPgQEAhQAhuw==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
