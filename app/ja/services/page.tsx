import { redirect } from "next/navigation";
// Japanese sub-pages redirect to Chinese for now
// Full JA translation is planned for Phase 2
export default function JaServicesRedirect() {
  redirect("/services");
}
