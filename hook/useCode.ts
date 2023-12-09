export function useGetCode() {
  const getcode = document.getElementById("playground")?.innerHTML;
  
  const newText = getcode?.split(">");
  const newText2 = newText?.map((text) => {
    if (text.startsWith("<img")) {
      return `${text}/>`;
    } else if (text.startsWith("<svg")) {
      return ` {/* YOUR SVG or ICON */}`;
    } else if (text.startsWith("</svg")) return;
    else if (text.startsWith("</path")) return;
    else if (text.startsWith("<path")) return;
    else if (text.startsWith("<pol")) return;
    else if (text.startsWith("</pol")) return;
    else if (text.startsWith("</line")) return;
    else if (text.startsWith("<line")) return;
    else if (text.startsWith("<rect")) return;
    else if (text.startsWith("</rect")) return;
    return `${text}>`;
  });
  //@ts-ignore
  return newText2?.toString().replaceAll(">,<", ">\r\n<")
  .replaceAll(",","").replaceAll(">>",">").replaceAll("class","className");
}
