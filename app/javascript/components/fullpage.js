
// Optional. When using fullPage extensions
//import scrollHorizontally from './fullpage.scrollHorizontally.min';

// Optional. When using scrollOverflow:true
//import IScroll from 'fullpage.js/vendors/scrolloverflow';



// // When using fullPage extensions replace the previous import
// // of fullpage.js for this file
// //import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// // Initializing it
// var fullPageInstance = new fullpage('fullpage', {
//     navigation: true,
//     sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
// });

// Importing fullpage.js
import fullpage from 'fullpage.js';


const initFullPageJS = () => { 
    new fullpage("#fullpage", {
    //options here
    licenseKey: 'q2NraPV@b1',
    autoScrolling: true,
    navigation: true }
    )};

// export { initFullPageJS };
//     onLeave: (origin, destination, direction) => {
//       const section = destination.item;
//       const title = section.querySelector("h1");
//       console.log(title)
//       const tl = new TimelineMax({ delay: 0.5 });
//       tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "-40", opacity: 1 });

//         if (destination.index === 1) {
//             const hugoimg = document.querySelectorAll(".hugoimg");
//             const description = document.querySelector(".description");
//             tl.fromTo(hugoimg, 2, { opacity: 0, x: "-80%" }, { opacity: 1, x: "25%" })
//               .fromTo(
//                 description,
//                 0.8,
//                 { opacity: 0, y: "50" },
//                 { y: "0", opacity: 1 }
//               )
//               .fromTo(hugoimg[0], 1, { opacity: 0.3 }, { opacity: 1 })
//               .fromTo(hugoimg[1], 2, { opacity: 0 }, { opacity: 1 })
//               .fromTo(hugoimg[2], 3, { opacity: 0 }, { opacity: 1 });
//           }
//     }
// });
// };
