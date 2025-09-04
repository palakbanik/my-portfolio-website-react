export default function ImagePart({ image }) {
  return (
    <div className="max-w-[500px] h-auto px-8 mx-auto">
      <div className="border-b-[18px] border-l-[18px]  border-r-[18px] border-imgBg  p-4 relative">
        <img
          src={image}
          alt="Polok's image"
          className=" border-primaryColor -mt-12  w-full h-auto"
          draggable="false"
        />
      </div>
    </div>
  );
}
