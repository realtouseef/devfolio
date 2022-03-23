import Image from "../../data/custom/customImage";
import me from "../../data/images/mee.jpg";

const ProfileCard = () => {
  return (
    <main>
      <center className="flex items-start text-left bg-secondary-light-color rounded-lg">
        <Image
          src={me}
          alt="me"
          width={620}
          height={800}
          className="rounded-l-lg object-center object-cover"
          loading="lazy"
        />
        <article className="px-10 py-8 text-lg font-medium">
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
