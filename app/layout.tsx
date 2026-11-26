import type { Metadata } from "next";
import "./globals.css";
import {siteUrl} from "@/lib/site";
export const metadata: Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"Fahmi Daihatsu | Promo Daihatsu Depok",template:"%s | Fahmi Daihatsu"},
 description:"Konsultasi harga, promo, DP, cicilan, test drive dan trade-in mobil Daihatsu bersama Fahmi Daihatsu di Depok.",
 keywords:["Daihatsu Depok","Promo Daihatsu Depok","Sales Daihatsu Depok","Harga Daihatsu","Fahmi Daihatsu"],
 openGraph:{title:"Fahmi Daihatsu | Astra Daihatsu Depok",description:"Konsultasi promo dan simulasi kredit Daihatsu bersama Fahmi.",type:"website",locale:"id_ID"},
 twitter:{card:"summary_large_image"},
 robots:{index:true,follow:true},
 icons:{icon:"/favicon.ico?v=2",shortcut:"/favicon.ico?v=2"}
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="id"><body>{children}</body></html>;
}