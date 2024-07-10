
export const defaults = {
    serif: "playfair",
    sansSerif: "opensans",
}

export const darkTheme = {
    ...defaults,
    bodyColor: "#363636",
    mainColor: "#FFFFFF",
    textShadowD: "0 4px 4px rgba(0, 0, 0, 0.6)",
    socBorder: "rgba(255,255,255,0.25)"
}

export const lightTheme = {
    ...defaults,
    bodyColor: "#FFFFFF",
    mainColor: "#363636",
    textShadowD: "0 4px 4px rgba(0, 0, 0, 0.25)",
    socBorder: "rgba(0,0,0,0.25)"
}