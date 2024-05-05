import { useAccount, useBalance } from 'wagmi'

export default function Balance() {

	const { address } = useAccount();

	const { data, isError, isLoading } = useBalance({
		address,
	})

	if (isLoading) return (<div>Fetching balance…</div>)
	if (isError) return (<div>Error fetching balance</div>)
	if (data) {
		return (
			<div>
				Balance: {data?.formatted} {data?.symbol}
			</div>
		)
	}
}