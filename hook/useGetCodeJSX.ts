export function useGetCodeJSX() {
    const getcode = document.getElementById("playground")?.innerHTML;
    
    const newText = getcode?.split(">");
    const newText2 = newText?.map((text) => {
      if (text.startsWith("<img")) {
        return `${text}/>`;
      } else
      {return `${text}>`};
    });
    //@ts-ignore
    const text3= newText2?.toString().replaceAll(">,<", ">\r\n<")
    .replaceAll(",","").replaceAll(">>",">").replaceAll("class","className")
    .replaceAll("@lg","md").replaceAll("@2xl","lg");
console.log(typeof text3);
    const text4=`export default function ComponentName(){
        return(
               ${text3}
        )
    }`
    return text4
  }
  