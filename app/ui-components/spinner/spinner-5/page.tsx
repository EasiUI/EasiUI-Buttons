export default function Spinner5(){
    return(
           <div className="">
<svg width="24" height="24" className="inline w-14 h-14 mr-2 text-gray-200  dark:text-gray-600 fill-purple-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="12" r="3" opacity="1">
<animate id="spinner_qYjJ" begin="0;spinner_t4KZ.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze">
</animate>
</circle>
<circle cx="12" cy="12" r="3" opacity=".4">
<animate begin="spinner_qYjJ.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze">
</animate>
</circle>
<circle cx="20" cy="12" r="3" opacity=".3">
<animate id="spinner_t4KZ" begin="spinner_qYjJ.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze">
</animate>
</circle>
</svg>
<span className="sr-only">Loading...</span>
</div>
    )
}