import type {MetadataRoute} from "next";import {cars} from "@/lib/data";import {siteUrl} from "@/lib/site";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{return [{url:`${siteUrl}/`,lastModified:new Date(),changeFrequency:"weekly",priority:1},{url:`${siteUrl}/#mobil`,lastModified:new Date(),changeFrequency:"weekly",priority:.8},...cars.map(c=>({url:`${siteUrl}/mobil/${c.slug}/`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7}))];}
