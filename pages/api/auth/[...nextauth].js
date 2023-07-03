// import NextAuth from "next-auth/next"
// import GoogleProvider from "next-auth/providers/google"
// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLINET_ID,
//       clientSecret: process.env.GOOGLECLIENT_SECRET
//     })
//   ],
//
//   secret: process.env.JWT_SECRET,
//   callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       return true
//     },
//     async redirect({ url, baseUrl }) {
//       return baseUrl
//     }
//   }
// })
