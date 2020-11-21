const inject = (items, sections) => {

    console.log(sections)

    for (let  [key,elemSections] of sections.entries()){
        const {content, index} = elemSections
        items.splice(index+key, 0, content)
    }
    return items

}
export { inject };
