import type { StaticImageData } from "next/image";
import aylaImg from "@/assets/img/ayla.png";
import granmaxMinibusImg from "@/assets/img/grandmax-mini-bus.jpeg";
import granmaxImg from "@/assets/img/grandmax.png";
import luxioImg from "@/assets/img/luxio.jpeg";
import rockyHybridImg from "@/assets/img/rocky-hybrid.jpeg";
import rockyImg from "@/assets/img/rocky.jpeg";
import sigraImg from "@/assets/img/sigra.png";
import teriosImg from "@/assets/img/terios.png";
import xeniaImg from "@/assets/img/xenia.jpeg";

export type Car={slug:string;name:string;category:string;description:string;image?:StaticImageData};

export const siteInfo={phone:"085135506009",waLink:(message:string)=>`https://wa.me/6285135506009?text=${encodeURIComponent(message)}`};
export const cars:Car[]=[
 {slug:"ayla",name:"Daihatsu Ayla",category:"CITY CAR",description:"Compact, praktis untuk mobilitas harian.",image:aylaImg},
 {slug:"sigra",name:"Daihatsu Sigra",category:"MPV",description:"Pilihan keluarga dengan fleksibilitas ruang.",image:sigraImg},
 {slug:"xenia",name:"Daihatsu Xenia",category:"MPV",description:"MPV untuk perjalanan bersama keluarga.",image:xeniaImg},
 {slug:"terios",name:"Daihatsu Terios",category:"SUV",description:"SUV untuk perjalanan dan aktivitas.",image:teriosImg},
 {slug:"rocky",name:"Daihatsu Rocky",category:"SUV",description:"SUV kompak dengan desain modern.",image:rockyImg},
 {slug:"rocky-hybrid",name:"Daihatsu Rocky Hybrid",category:"HYBRID",description:"Teknologi hybrid dalam SUV kompak.",image:rockyHybridImg},
 {slug:"granmax-pickup",name:"Gran Max Pick Up",category:"PICK UP",description:"Kendaraan niaga untuk mendukung usaha.",image:granmaxImg},
 {slug:"granmax-minibus",name:"Gran Max Minibus",category:"MINIBUS",description:"Kapasitas dan fleksibilitas untuk kebutuhan usaha.",image:granmaxMinibusImg},
 {slug:"luxio",name:"Daihatsu Luxio",category:"MPV",description:"MPV dengan ruang kabin yang lega.",image:luxioImg}
];