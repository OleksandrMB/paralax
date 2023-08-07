type CardType = {
  image: string;
  description: string;
  name: string;
  position: string;
  linkedinUrl: string;
  radius: string;
  small: boolean;
};
const TeamCard = ({
  image,
  description,
  name,
  position,
  linkedinUrl,
  radius,
  small,
}: CardType) => {
  return (
    <>
      <img
        src={image}
        className={`w-full h-full ${radius} object-cover group-hover:invisible`}
        style={{ transform: "scaleX(-1)" }}
      />
      <div
        className={`invisible group-hover:visible cursor-pointer bg-opacity-10 bg-white w-full h-full ${radius} pt-6 pr-4 pb-6 pl-4 flex flex-col gap-15 items-start justify-start absolute -top-0 ring-0`}
        style={{
          backdropFilter: "blur(5.9px)",
        }}
      >
        <div className="flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative ">
          <img
            className={`rounded-full ${
              small ? "w-[45px] h-[45px]" : "w-[80px] h-[80px]"
            } relative mb-[7px] object-fill`}
            src={image}
            alt={name}
          />

          <div className="text-black flex flex-row gap-2 items-start justify-start self-stretch flex-1 relative">
            <p className=" font-helvetica-font font-medium text-[13px] leading-[140%]">
              {description}
            </p>
          </div>

          <div className="flex flex-row items-end justify-between self-stretch shrink-0 relative">
            <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
              <div className="text-black font-medium text-[16px] leading-[140%]">
                {name}
              </div>

              <div className="text-black font-light text-[12px] leading-[140%]">
                {position}
              </div>
            </div>

            <div className="w-7 h-7 static">
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <rect
                    x="5.14062"
                    y="4.69531"
                    width="19.9375"
                    height="19.9375"
                    rx="1.81641"
                    fill="white"
                  />
                  <path
                    d="M24.2726 2.88281C24.9669 2.88281 25.6328 3.15864 26.1238 3.64962C26.6148 4.1406 26.8906 4.80652 26.8906 5.50087V23.8273C26.8906 24.5216 26.6148 25.1875 26.1238 25.6785C25.6328 26.1695 24.9669 26.4453 24.2726 26.4453H5.94618C5.25183 26.4453 4.58592 26.1695 4.09494 25.6785C3.60395 25.1875 3.32813 24.5216 3.32812 23.8273V5.50087C3.32812 4.80652 3.60395 4.1406 4.09494 3.64962C4.58592 3.15864 5.25183 2.88281 5.94618 2.88281H24.2726ZM23.6181 23.1727V16.2349C23.6181 15.1031 23.1685 14.0177 22.3682 13.2174C21.5679 12.4171 20.4824 11.9675 19.3506 11.9675C18.238 11.9675 16.942 12.6482 16.3137 13.6692V12.2162H12.6615V23.1727H16.3137V16.7192C16.3137 15.7113 17.1253 14.8866 18.1332 14.8866C18.6193 14.8866 19.0854 15.0797 19.4291 15.4234C19.7728 15.7671 19.9659 16.2332 19.9659 16.7192V23.1727H23.6181ZM8.40715 10.161C8.99041 10.161 9.54978 9.92931 9.9622 9.51689C10.3746 9.10446 10.6063 8.5451 10.6063 7.96184C10.6063 6.74444 9.62455 5.74958 8.40715 5.74958C7.82043 5.74958 7.25773 5.98266 6.84285 6.39754C6.42797 6.81242 6.1949 7.37511 6.1949 7.96184C6.1949 9.17924 7.18976 10.161 8.40715 10.161ZM10.2267 23.1727V12.2162H6.60069V23.1727H10.2267Z"
                    fill="url(#paint0_linear_1226_26476)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1226_26476"
                      x1="37.7316"
                      y1="-10.9406"
                      x2="8.90322"
                      y2="-17.9511"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#32E1F9" stop-opacity="0.5" />
                      <stop offset="0.734118" stop-color="#564CEC" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
