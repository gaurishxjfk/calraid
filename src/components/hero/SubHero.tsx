

const menuArr = ["About Us", "Services", "Testimonials"];
const SubHero = () => {
  return (
    <div className="mx-12 mt-10 encode-sans-semi-condensed-regular hiddegn md:block px-4">
      <div className="flex justify-between mb-2">
        {menuArr.map((i) => (
          <a href="/" key={i} className="text-lg encode-sans-semi-condensed-medium">
            {i}
          </a>
        ))}
      </div>
      <p className="mb-2 line-clamp-3 md:line-clamp-none">
        CalRaid Nutrition Clinic is the brain child of dietitian Luana
        Mascarenhas, a qualified dietitian who decided to take a step further to
        educate the community we live in on the importance of Nutrition & Health
        in today's day and age. CalRaid comes from the concept of raiding
        calories within our pantry and kitchen which are empty and unnecessary
        for our body and end up causing more harm than good.
      </p>
      <a href="/" className="underline">
        Read More...
      </a>
    </div>
  );
};

export default SubHero;
