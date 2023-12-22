export default function Spinner10(){
    return(
           <div className="">
<svg width="24" height="24" className="inline w-14 h-14 mr-2 text-gray-200  dark:text-gray-600 fill-teal-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="6" width="2.8" height="12">
<animate begin="spinner_Diec.begin+0.4s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
<animate begin="spinner_Diec.begin+0.4s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
</rect>
<rect x="5.8" y="6" width="2.8" height="12">
<animate begin="spinner_Diec.begin+0.2s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
<animate begin="spinner_Diec.begin+0.2s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
</rect>
<rect x="10.6" y="6" width="2.8" height="12">
<animate id="spinner_Diec" begin="0;spinner_dm8s.end-0.1s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
<animate begin="0;spinner_dm8s.end-0.1s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
</rect>
<rect x="15.4" y="6" width="2.8" height="12">
<animate begin="spinner_Diec.begin+0.2s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
<animate begin="spinner_Diec.begin+0.2s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
</rect>
<rect x="20.2" y="6" width="2.8" height="12">
<animate id="spinner_dm8s" begin="spinner_Diec.begin+0.4s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
<animate begin="spinner_Diec.begin+0.4s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".14 .73 .34 1;.65 .26 .82 .45">
</animate>
</rect>
</svg>
<span className="sr-only">Loading...</span>
</div>
    )
}