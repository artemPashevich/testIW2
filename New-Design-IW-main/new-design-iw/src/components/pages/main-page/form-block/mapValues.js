export const mapServicesToInt = (services) => {
    switch (services) {
      case 'Website':
        return 0;
      case 'Application':
        return 1;
      case 'Other':
        return 2;
      default:
        return null;
    }
  };
  
  export const mapBudgetToInt = (budget) => {
    switch (budget) {
      case 'From1Kto5K':
        return 0;
      case 'From5Kto10K':
        return 1;
      case 'From10Kto50K':
        return 2;
      case 'MoreThan50K':
        return 3;
      default:
        return null;
    }
  };