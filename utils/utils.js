export const findDataTest = (component,attr) =>{
    const data = component.find(`[data-test='${attr}']`)
    return data
}