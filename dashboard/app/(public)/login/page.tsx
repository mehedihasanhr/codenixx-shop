import LoginForm from "@/components/forms/login-form";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="w-screen lg:w-[900px] h-screen lg:h-[500px] shadow-md rounded-lg bg-white">
        <div className="grid grid-cols-12 gap-5 h-full">
          {/* image  */}
          <div className="col-span-12 lg:col-span-7 relative overflow-hidden">
            <Image
              src="/images/green-banner.png"
              alt="Login Banner"
              width={500}
              height={500}
              className="absolute top-0 left-0 object-fit w-full h-full"
              placeholder="blur"
              blurDataURL="data:image/png;base64,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"
            />
          </div>

          {/* Login form */}
          <div className="col-span-12 lg:col-span-5">
            <div className="w-full h-full px-8 flex flex-col justify-center items-stretch">
              <h3 className="mb-6">
                Welcome to Codenixx Shop Dashboard Registration
              </h3>
              <LoginForm />
              <p className="block mt-5 text-sm text-neutral-500">
                {"Don't have an account? "}
                <Link
                  href="/register"
                  className=" text-black font-medium hover:underline"
                >
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
