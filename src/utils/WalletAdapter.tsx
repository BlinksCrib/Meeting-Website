import { useWallet } from '@solana/wallet-adapter-react';

const WalletAdapter = () => {
    const { wallet, connect, disconnect } = useWallet();

    return (
        <div>
            {!wallet ? (
                <button onClick={() => connect()}>Connect Wallet</button>
            ) : (
                <div>
                    <button onClick={() => disconnect()}>Disconnect Wallet</button>
                    <p>Wallet connected: {wallet.adapter.publicKey?.toBase58()}</p>
                </div>
            )}
        </div>
    );
};

export default WalletAdapter;
