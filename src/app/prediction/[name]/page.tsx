const getPredictedAge = async (name: string): Promise<AgePredictedData> => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (
  name: string
): Promise<CountryPredictedData> => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (
  name: string
): Promise<GenderPredictedData> => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

interface PredictionProps {
  params: { name: string };
}

interface FetchDataProps {
  name: string;
}

interface PredictedData {
  count: number;
  name: string;
}

interface Country {
  country_id: string;
  probability: number;
}

interface AgePredictedData extends PredictedData {
  age: number;
}

interface CountryPredictedData extends PredictedData {
  country: Country[];
}

interface GenderPredictedData extends PredictedData {
  gender: string;
  probability: number;
}

const fetchData = async ({ name }: FetchDataProps) => {
  const ageData = getPredictedAge(name);
  const countryData = getPredictedCountry(name);
  const genderData = getPredictedGender(name);

  const [age, country, gender] = await Promise.all([
    ageData,
    countryData,
    genderData,
  ]);

  return {
    age: age.age,
    country: country?.country[0]?.country_id,
    gender: gender.gender,
  };
};

const Prediction = async ({ params }: PredictionProps) => {
  const name = decodeURIComponent(params.name);
  const { age, country, gender } = await fetchData({ name });

  return (
    <div className="min-h-screen flex justify-center items-center font-mono">
      <div className="border border-slate-300 rounded-md px-24 py-16">
        <p>Name: {name}</p>
        <p className="mt-3">Predicted Age: {age || "-"}</p>
        <p className="mt-3">Predcited Country: {country || "-"}</p>
        <p className="mt-3">Predicted Gender: {gender || "-"}</p>
      </div>
    </div>
  );
};

export default Prediction;
