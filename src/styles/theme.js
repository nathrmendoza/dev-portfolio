
export const defaults = {
    serif: "Playfair Display, serif",
    sansSerif: "Open Sans, sans-serif",
    borderColor: "#DFDFDF",
    trackColor: "#CCCCCC",
    thumbColor: "#9F9F9F"
}

export const darkTheme = {
    ...defaults,
    bodyColor: "#363636",
    mainColor: "#FFFFFF",
    textShadowD: "0 4px 4px rgba(0, 0, 0, 0.6)",
    socBorder: "rgba(255,255,255,0.25)",
    headerGradient: "linear-gradient(0deg, rgba(54,54,54,0) 0%, rgba(54,54,54,1) 65%)"
}

export const lightTheme = {
    ...defaults,
    bodyColor: "#FFFFFF",
    mainColor: "#363636",
    textShadowD: "0 4px 4px rgba(0, 0, 0, 0.25)",
    socBorder: "rgba(0,0,0,0.25)",
    headerGradient: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%)"
}