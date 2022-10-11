import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "73cc4e5e1a134f5482f7b3412a813375";
const token = "007eJxTYAiLUYu78W/xvM4iy9tPnrhWxUX0B3kG2yfZ6XsLzNyq/EuBwdw4Odkk1TTVMNHQ2CTN1MTCKM08ydjE0CjRwtDY2NzUXNsleVuNa/K6lWcZGKEQxGdhyE3MzGNgAAAi6h/k"

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token}
export const useClient = createClient(config)
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
export const channelName = "main"