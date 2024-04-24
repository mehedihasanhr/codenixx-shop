import { cn } from "../../lib/utils";

interface IProps {
  className?: string;
  accentColor?: string;
  secondaryColor?: string;
}

export default function Logo(props: IProps) {
  return (
    <div className={cn("w-[215px] h-[52px]", props.className)}>
      <svg
        width="512"
        height="125"
        viewBox="0 0 512 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M107.228 60.7882C107.228 66.8888 106.102 72.079 103.849 76.3585C101.614 80.6381 98.5632 83.907 94.6962 86.1652C90.847 88.4051 86.5189 89.5251 81.7118 89.5251C76.8692 89.5251 72.5233 88.396 68.6741 86.1378C64.8248 83.8797 61.7827 80.6108 59.5477 76.3312C57.3126 72.0517 56.1951 66.8706 56.1951 60.7882C56.1951 54.6875 57.3126 49.4974 59.5477 45.2178C61.7827 40.9382 64.8248 37.6785 68.6741 35.4385C72.5233 33.1804 76.8692 32.0513 81.7118 32.0513C86.5189 32.0513 90.847 33.1804 94.6962 35.4385C98.5632 37.6785 101.614 40.9382 103.849 45.2178C106.102 49.4974 107.228 54.6875 107.228 60.7882ZM95.5477 60.7882C95.5477 56.8364 94.9712 53.5038 93.8182 50.7904C92.6829 48.0769 91.0776 46.0191 89.0022 44.6168C86.9268 43.2146 84.4967 42.5135 81.7118 42.5135C78.9268 42.5135 76.4967 43.2146 74.4213 44.6168C72.3459 46.0191 70.7317 48.0769 69.5787 50.7904C68.4435 53.5038 67.8758 56.8364 67.8758 60.7882C67.8758 64.74 68.4435 68.0726 69.5787 70.786C70.7317 73.4994 72.3459 75.5573 74.4213 76.9595C76.4967 78.3618 78.9268 79.0629 81.7118 79.0629C84.4967 79.0629 86.9268 78.3618 89.0022 76.9595C91.0776 75.5573 92.6829 73.4994 93.8182 70.786C94.9712 68.0726 95.5477 64.74 95.5477 60.7882Z"
          className={cn(
            "fill-[#423535] dark:fill-white/90",
            props.secondaryColor
          )}
        />
        <path
          d="M135.08 88.7602H115.763V32.8161H135.239C140.721 32.8161 145.439 33.9361 149.395 36.1761C153.35 38.3978 156.392 41.5938 158.521 45.7641C160.667 49.9344 161.741 54.9242 161.741 60.7335C161.741 66.5611 160.667 71.5691 158.521 75.7576C156.392 79.9461 153.333 83.1603 149.341 85.4003C145.368 87.6402 140.614 88.7602 135.08 88.7602ZM127.284 78.6258H134.601C138.007 78.6258 140.871 78.0066 143.195 76.7683C145.537 75.5117 147.293 73.5723 148.463 70.9499C149.652 68.3093 150.246 64.9039 150.246 60.7335C150.246 56.5997 149.652 53.2215 148.463 50.5991C147.293 47.9768 145.545 46.0464 143.222 44.8081C140.898 43.5697 138.033 42.9505 134.628 42.9505H127.284V78.6258Z"
          className={cn(
            "fill-[#423535] dark:fill-white/90",
            props.secondaryColor
          )}
        />
        <path
          d="M170.275 88.7602V32.8161H206.993V42.5681H181.796V55.8985H205.104V65.6505H181.796V79.0082H207.1V88.7602H170.275Z"
          className={cn(
            "fill-[#423535] dark:fill-white/90",
            props.secondaryColor
          )}
        />
        <path
          d="M292.497 32.0513V87.9954H280.976V32.0513H292.497Z"
          className={cn(
            "fill-[#423535] dark:fill-white/90",
            props.secondaryColor
          )}
        />
        <path
          d="M312.778 32.0513L323.767 51.1181H324.193L335.235 32.0513H348.246L331.616 60.0233L348.619 87.9954H335.368L324.193 68.9012H323.767L312.592 87.9954H299.395L316.45 60.0233L299.714 32.0513H312.778Z"
          className={cn(
            "fill-[#423535] dark:fill-white/90",
            props.secondaryColor
          )}
        />
        <path
          d="M49.0377 52.4024L21.8537 60.8972C21.6408 59.3493 36.7362 49.4795 36.0798 48.2776C35.4235 47.0575 34.581 46.0195 33.5521 45.1635C32.5233 44.3076 31.3348 43.652 29.9867 43.1968C28.6563 42.7415 27.2107 42.5138 25.6497 42.5138C22.8293 42.5138 20.3725 43.2332 18.2794 44.6718C16.1863 46.0923 14.5632 48.1683 13.4102 50.9C12.2572 53.6134 11.6807 56.9096 11.6807 60.7885C11.6807 64.7767 12.2572 68.1276 13.4102 70.841C14.5809 73.5544 16.2129 75.6032 18.306 76.9872C20.3991 78.3712 22.8204 79.0633 25.5699 79.0633C27.1131 79.0633 28.541 78.8538 29.8537 78.435C31.1841 78.0161 32.3637 77.4061 33.3925 76.6048C34.4213 75.7853 35.2727 74.7928 35.9468 73.6273C36.6386 72.4618 37.1175 71.1324 37.3836 69.6391L49.0377 69.6937C48.7362 72.2614 47.9823 74.7382 46.7761 77.1238C45.5876 79.4912 43.9823 81.6128 41.9601 83.4885C39.9557 85.346 37.561 86.8211 34.7761 87.9138C32.0089 88.9882 28.8781 89.5255 25.3836 89.5255C20.5233 89.5255 16.1774 88.3964 12.3459 86.1382C8.53215 83.8801 5.51663 80.6112 3.29933 76.3316C1.09978 72.052 0 66.871 0 60.7885C0 54.6879 1.11751 49.4978 3.35255 45.2182C5.58758 40.9386 8.62084 37.6788 12.4523 35.4389C16.2838 33.1807 20.5943 32.0516 25.3836 32.0516C28.541 32.0516 31.4679 32.5069 34.1641 33.4175C36.8781 34.328 39.2816 35.6574 41.3747 37.4057C43.4679 39.1357 45.1707 41.2573 46.4834 43.7704C47.8138 46.2835 48.6652 49.1608 49.0377 52.4024Z"
          className="fill-primary"
        />
        <path
          d="M305.229 -0.000132286L258.273 33.7342L263.476 87.959L253.979 88.9193L227.888 55.0709L227.507 55.1095L230.974 91.2458L164.973 107.582L219.367 85.9783L214.47 34.9432L224.119 33.9674L250.03 67.8058L250.488 67.7596L247.023 31.6513L305.229 -0.000132286Z"
          className="fill-primary"
        />
        <path
          d="M369.286 32.0513L380.275 51.1181H380.701L391.743 32.0513H404.754L388.124 60.0233L405.854 86.5385L512 125L391.876 87.9954L380.701 68.9012H380.275L369.1 87.9954H355.902L372.958 60.0233L356.222 32.0513H369.286Z"
          className="fill-primary"
        />
      </svg>
    </div>
  );
}
