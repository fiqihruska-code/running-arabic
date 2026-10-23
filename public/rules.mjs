export const difficulties={easy:{seconds:16,label:'Mudah'},medium:{seconds:11,label:'Sedang'},hard:{seconds:7,label:'Sulit'}};
export function shuffled(values,rng=Math.random){const out=[...values];for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
export function optionsFor(question,pool,rng=Math.random){const same=pool.filter(q=>q.id!==question.id&&q.theme===question.theme);const other=pool.filter(q=>q.id!==question.id&&q.theme!==question.theme);return shuffled([question,...[...shuffled(same,rng),...shuffled(other,rng)].slice(0,2)],rng);}
export function assess(question,options,lane){const correct=lane!==null&&options[lane]?.id===question.id;return {correct,points:correct?10:0,lifeLost:correct?0:1};}
