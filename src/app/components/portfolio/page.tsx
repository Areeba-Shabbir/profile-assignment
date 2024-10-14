// // app/components-portfolio.ts

// export default function Profile() {
//     return (
//       // <div className="container">
//         <div className="info">
//           <h1>Areeba Shabbir</h1>
//           <h2>Developer Profile</h2>
//           <p>
//             Areeba Shabbir is a developer specializing in building interactive web applications using modern frameworks like Next.js.
//           </p>
//           <p>
//             I'm currently focused on learning TypeScript and enhancing my skills in building responsive and user-friendly interfaces.
//             <img src="/web_developer.jpeg" alt="Areeba Shabbir" width={150} height={150}/>
//           </p>
//         </div>   
//     );
//   }

// app/components-portfolio.tsx
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="info">
      <h1>Areeba Shabbir</h1>
      <h2>Developer Profile</h2>
      <p>
        Areeba Shabbir is a developer specializing in building interactive web applications using modern frameworks like Next.js.
      </p>
      <p>
        I'm currently focused on learning TypeScript and enhancing my skills in building responsive and user-friendly interfaces.
      </p>
      {/* Use Next.js Image component for optimized loading */}
      <div className="image">
        <Image src="/web_developer.jpeg" alt="Areeba Shabbir" width={150} height={150} />
      </div>
    </div>
  );
}
