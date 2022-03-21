import Image from "next/image";
import me from "../../data/images/me.jpg";

const ProfileCard = () => {
  return (
    <main>
      <center className="flex items-start text-left bg-secondary-light-color rounded-lg">
        <Image
          src={me}
          alt="me"
          className="object-cover object-center lg:h-48 md:h-36"
          width={544}
          height={306}
          // layout="fixed"
          loading="lazy"
        />
        <article className="px-12 py-8 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </article>
      </center>
    </main>
  );
};

export default ProfileCard;
