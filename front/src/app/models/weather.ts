export class Weather{
	constructor(
		public _id: string,
		public temperature: number,
		public precipitations: number,
		public humidity: number,
        public clouds: number,
        public windSpeed: number,
        public date: Date
	){}
}