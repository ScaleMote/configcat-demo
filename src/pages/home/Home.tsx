import { useFeatureFlag } from 'configcat-react';

export default function Home() {
	const { value: value1, loading: loading1 } = useFeatureFlag<boolean>(
		'featureflag1',
		false,
	);
	const { value: value2, loading: loading2 } = useFeatureFlag(
		'featureflag2',
		false,
	);
	const { value: value3, loading: loading3 } = useFeatureFlag(
		'featureflag3',
		false,
	);

	return (
		<div className="flex items-center justify-center h-screen">
			{/* data-test? https://docs.cypress.io/guides/references/best-practices */}
			<h1 className="text-3xl font-bold underline" data-test="home-msg">
				This is the homepage!
				{!loading1 && !loading2 && !loading3 && (
					<>
						<div>valor1: {value1.toString()}</div>
						<div>valor2: {value2.toString()}</div>
						<div>valor3: {value3.toString()}</div>
					</>
				)}
			</h1>
		</div>
	);
}
