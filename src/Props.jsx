import React, { Component } from "react";

// class Props extends Component {
//   render() {
//     const { children, title, status } = this.props;
//     return (
//       //   <div>
//       //     <h1>Hi {this.props?.data?.title}</h1>
//       //     <h1> {this.props?.data?.title} is Js Library</h1>
//       //     <h5>
//       //       {this.props?.data?.title} is {this.props?.data?.status || "unnown"}
//       //     </h5>
//       //   </div>
//       //   <div>
//       //     <h1>
//       //       Hi {this.props.title} and Hi {this.props.status || "netu"}
//       //     </h1>
//       //     {this.props.children}
//       //   </div>
//       <div>
//         <h1>
//           Hi {title} and Hi {status || "netu"}
//         </h1>
//         {children}
//       </div>
//     );
//   }
// }


class Props extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>
          {data.id} {data.name}
        </h1>
      </div>
    );
  }
}

export default Props;

// this.props.title yani bergan nomimz orqali qayerda props kerak bolsa osha yerda yozamz
// reactda qande nom bn jonatb yuborgan bolsak osha nom  bn  chaqrib olamz

// bz proplarni singil teg yani teglar ichidi beryapmz yopiq teglar endi ochiq teglarda ham bersak boladi
// buni ichi yozga malumotimzni child deyiladi

// biz har bittasiga props props deb utirmasdan distructure aniq qandey nomini bilsak kegn distracture qilvolishmz kerrak
//  qilib ollsak boladi  yani tepada const {children ,  title , status} = this.props
// yani childrenni children deymz va boshqa componentdda qandey nom yozgan bolsak shu nomni yozamz
