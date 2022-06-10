export const data = {
  field: "Depression Type",
  name: "Geriatric_depression",
  children: [
    {
      field: "Disease Level",
      name: "geriatric_severe",
      children: [
        {
          field: "Treatment Strategies",
          name: "geriatric_severe_AD",
          children: [
            {
              field: "Treatment Priority",
              name: "hasTreatmentOfChoice_AD",
              children: [
                {
                  field: "Drugs",
                  name: "Escitalopram"
                }
              ]
            },
            {
              field: "Treatment Priority",
              name: "has1stLine_AD",
              children: [
                {
                  field: "Drugs",
                  name: "Desvenlafaxine"
                },
                {
                  field: "Drugs",
                  name: "Duloxetine"
                },
                {
                  field: "Drugs",
                  name: "Fluoxetine"
                },
                {
                  field: "Drugs",
                  name: "Milnacipran"
                },
                {
                  field: "Drugs",
                  name: "Mirtazapine"
                },
                {
                  field: "Drugs",
                  name: "Paroxetine"
                },
                {
                  field: "Drugs",
                  name: "Sertraline"
                },
                {
                  field: "Drugs",
                  name: "Venlafaxine"
                },
                {
                  field: "Drugs",
                  name: "Vortioxetine"
                }
              ]
            },
            {
              field: "Treatment Priority",
              name: "has2ndLine_AD",
              children: [
                {
                  field: "Drugs",
                  name: "Agomelatine"
                },
                {
                  field: "Drugs",
                  name: "Bupropion"
                },
                {
                  field: "Drugs",
                  name: "TCAs"
                },
                {
                  field: "Drugs",
                  name: "Tianeptine"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
