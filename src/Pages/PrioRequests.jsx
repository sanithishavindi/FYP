

export const PrioRequests = (requests) => {
  return requests.sort ((a,b) =>{

     // Sort by triage level in descending order (higher levels have higher priority)
     if (a.level !== b.level) {
        return b.level - a.level;
      }
      // If levels are equal, sort alphabetically by specialization
      return a.specialization.localeCompare(b.specialization);

  });
};


