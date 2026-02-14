/**
 * Apple splash screen link tags for iOS PWA "Add to Home Screen".
 * These must be in <head> for Safari to use them during app launch.
 * Media queries match device screen + pixel ratio to serve the right image.
 */
export function AppleSplashLinks() {
  return (
    <>
      {/* iPhone SE, iPod Touch */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-se.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" />
      {/* iPhone 8, 7, 6s, 6 */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-8.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" />
      {/* iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-8-plus.png"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" />
      {/* iPhone X, XS, 11 Pro */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-x.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
      {/* iPhone XR, 11 */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-xr.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" />
      {/* iPhone XS Max, 11 Pro Max */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-xsmax.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" />
      {/* iPhone 12, 12 Pro, 13, 13 Pro, 14 */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-12.png"
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)" />
      {/* iPhone 14 Pro, 15, 15 Pro */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-14-pro.png"
        media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)" />
      {/* iPhone 14 Pro Max, 15 Plus, 15 Pro Max */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-14-promax.png"
        media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)" />
      {/* iPhone 16 Pro */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-16-pro.png"
        media="(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3)" />
      {/* iPhone 16 Pro Max */}
      <link rel="apple-touch-startup-image" href="/splash/iphone-16-promax.png"
        media="(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3)" />
      {/* iPad (various standard) */}
      <link rel="apple-touch-startup-image" href="/splash/ipad.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" />
      {/* iPad Pro 11" */}
      <link rel="apple-touch-startup-image" href="/splash/ipad-pro-11.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" />
      {/* iPad Pro 12.9" */}
      <link rel="apple-touch-startup-image" href="/splash/ipad-pro-13.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" />
    </>
  )
}
