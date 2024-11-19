import BigTitle from "@/components/common/BigTitle";
import FullGallery from "@/components/FullGallery";

export default function Home() {
  return (
    <div>
      <BigTitle text={"Gallery"} className={"bg-galleryBg"} />
      <FullGallery />
    </div>
  );
}
