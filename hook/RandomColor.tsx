
export function useRandomColor(){
    const color=["green","emerald","gray","purple","teal","pink","sky","yellow","orange","lime",]
        const randomNumber=Math.floor(Math.random()*10)
    return color[randomNumber]
}

