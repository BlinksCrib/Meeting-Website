// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {
//   ConnectionProvider,
//   WalletProvider,
//   useConnection,
//   useWallet,
// } from "@solana/wallet-adapter-react";
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// import "./App.css";
// // import { Button } from '@solana/wallet-adapter-react-ui/lib/types/Button';

// import {
//   // GlowWalletAdapter,
//   LedgerWalletAdapter,
//   PhantomWalletAdapter,
//   // SlopeWalletAdapter,
//   SolflareWalletAdapter,
//   // SolletExtensionWalletAdapter,
//   // SolletWalletAdapter,
//   TorusWalletAdapter,
// } from "@solana/wallet-adapter-wallets";

// import {
//   clusterApiUrl,
//   Transaction,
//   SystemProgram,
//   Keypair,
//   LAMPORTS_PER_SOL,
//   PublicKey,
// } from "@solana/web3.js";
// import { FC, ReactNode, useMemo } from "react";

// // import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js';
// import Connect from "./components/Connect/Connect";

// // require('./App.css');
// // require('@solana/wallet-adapter-react-ui/styles.css');

// const App: FC = () => {
//   return (
//     <Context>
//       <Connect />
//     </Context>
//   );
// };

// export default App;

// const Context: FC<{ children: ReactNode }> = ({ children }) => {
//   // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
//   const network = WalletAdapterNetwork.Mainnet;

//   // You can also provide a custom RPC endpoint.
//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

//   // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
//   // Only the wallets you configure here will be compiled into your application, and only the dependencies
//   // of wallets that your users connect to will be loaded.
//   const wallets = useMemo(
//     () => [
//       new LedgerWalletAdapter(),
//       new PhantomWalletAdapter(),
//       // new GlowWalletAdapter(),
//       // new SlopeWalletAdapter(),
//       // new SolletExtensionWalletAdapter(),
//       // new SolletWalletAdapter(),
//       new SolflareWalletAdapter({ network }),
//       new TorusWalletAdapter(),
//     ],
//     [network]
//   );

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>{children}</WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// };

// A Fresh Design
// A Fresh Design

import { Routes, Route } from "react-router-dom";
import { HuddleProvider, HuddleClient } from "@huddle01/react";

import "./App.css";
import Contact from "./components/Contact/Contact";
import Call from "./components/Call/Call";

const huddleClient = new HuddleClient({
  projectId: import.meta.env.CALL_PROJECT_ID,
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

function App() {
  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <HuddleProvider client={huddleClient}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/call" element={<Call />} />
        </Routes>
      </HuddleProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// A Fresh Design
// A Fresh Design
