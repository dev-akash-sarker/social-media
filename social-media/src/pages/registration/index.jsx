import { Helmet } from "react-helmet-async";
import RegistrationForm from "../../components/Authentication/RegistrationForm";
import LeftAuth from "../../components/Authentication/leftAuth";
import RegistrationLeftBanner from "../../svg/RegistrationLeftBanner";

export default function Registration() {
  return (
    <>
      <Helmet>
        <title>Faceconnect - Registration</title>
      </Helmet>
      <div className=" relative z-10">
        <div className=" hidden -z-[1] lg:block w-[500px] h-[500px] bg-purple rounded-full absolute -top-[300px] -left-[245px]"></div>
        <div className=" container flex gap-x-6 justify-center items-center h-screen">
          <div className="lg:w-[45%] hidden lg:block">
            <LeftAuth
              icon={<RegistrationLeftBanner />}
              title={"Start your own journey"}
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minus
        reprehenderit nemo fugit quo at et eveniet libero repellat laborum dolor
        distinctio a id, nostrum, maxime doloremque molestiae totam quaerat,
        voluptatum suscipit omnis ratione ipsum? Aspernatur ipsam atque corporis
        quis, ad officia, voluptatum, ipsum minima enim explicabo nesciunt
        temporibus voluptas"
            />
          </div>
          <div className=" w-full lg:w-[45%]">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
}
