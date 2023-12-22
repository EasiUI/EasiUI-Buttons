export default function Spinner6(){
    return(
           <div className="">
<svg width="24" height="24" className="inline w-14 h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3">
</circle>
<g>
<circle cx="4" cy="12" r="3">
</circle>
<circle cx="20" cy="12" r="3">
</circle>
<animateTransform attributeName="transform" type="rotate" calcMode="spline" dur="1s" keySplines=".36.6.311;.36.6.311" values="0 12 12;180 12 12;360 12 12" repeatCount="indefinite">
</animateTransform>
</g>
</svg>
<span className="sr-only">Loading...</span>
</div>
    )
}