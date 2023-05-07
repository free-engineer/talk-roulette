"use client";
import WheelComponent from "react-wheel-of-prizes";
import { Mission } from "@/app/missions/type";

// const WheelComponent = require("react-wheel-of-prizes");

// React typescript で Props を受け取る
interface Props {
  missions: Mission[];
}

const Wheel: React.FC<Props> = (props: Props) => {
  // const Wheel: React.FC<Props> = ({props}: Props) => {
  const onFinished = (title: string) => {
    // missions に含まれるデータのうち、title をキーにして body を取得する
    let missionBody = "";
    const selectedMission = props.missions.find(
      (mission) => title === mission.title
    );
    alert(
      "【" +
        title +
        "】" +
        "\n\n" +
        (selectedMission ? selectedMission.body : "")
    );
  };

  const segments = props.missions.map((mission) => mission.title);
  const segColorMasters = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9001",
  ];
  // segColors に segColorMasters の値を順番にセットし、最後まで行ったら最初に戻る
  let colorIndex = 0;
  const segColors: string[] = [];
  props.missions.forEach((mission) => {
    segColors.push(segColorMasters[colorIndex]);
    colorIndex = (colorIndex + 1) % segColorMasters.length;
  });

  return (
    <div>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={onFinished}
        primaryColor="black"
        contrastColor="white"
        buttonText="Go!"
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={800}
        fontFamily="Arial"
        textFontSize="36"
      />
    </div>
  );
};

export default Wheel;
