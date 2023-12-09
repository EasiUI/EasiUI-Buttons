export function useBlockCode({id}:{id:string}) {
    const getcode = document.getElementById(id)?.innerHTML;
    
    const newText = getcode?.split(">");
    const newText2 = newText?.map((text) => {
      if (text.startsWith("<img")) {
        return `${text}/>`;
      } else
      {return `${text}>`};
    });
    //@ts-ignore
    return newText2?.toString().replaceAll(">,<", ">\r\n<")
    .replaceAll(",","").replaceAll(">>",">").replaceAll("class","className")
    .replaceAll("@lg","md").replaceAll("@2xl","lg");
  }