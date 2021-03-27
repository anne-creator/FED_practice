// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns a object pAequor with a specimen number and dna array with 15 DNA bases
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let randDna;
      dna.forEach(each => {
        do {
          randDna = returnRandBase();
        } while (randDna === each);
        console.log(randDna);
      })
      return dna;
    },
  }
}












