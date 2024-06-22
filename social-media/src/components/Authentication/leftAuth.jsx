// eslint-disable-next-line react/prop-types
export default function LeftAuth({ title, description, icon }) {
  return (
    <div>
      <div>{icon}</div>
      <h1 className="font-GilroyBold text-2xl text-primary_color 2xl:text-6xl 3xl:text-7xl">
        {title}
      </h1>
      <p className="font-GilroyNormal text-lg text-text_color mt-3">
        {description}
      </p>
    </div>
  );
}
