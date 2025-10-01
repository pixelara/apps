import type { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'health',
    name: 'Health',
    icon: '🏥',
    color: '#FF6B8D',
    subcategories: [
      {
        id: 'preventive-care',
        name: 'Preventive Care',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Foundation Building',
            description: 'Establish healthy habits and understand your body',
            recommendations: [
              'Annual physical exams',
              'Dental cleanings every 6 months',
              'Learn about menstrual health',
              'Get HPV vaccination',
              'Develop good skincare routine'
            ],
            testsToRun: [
              'Basic blood panel',
              'Vision and hearing tests',
              'Dental X-rays'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Health Independence',
            description: 'Take charge of your health as an independent adult',
            recommendations: [
              'Establish relationship with primary care doctor',
              'Start pap smears (21+)',
              'Breast self-examinations',
              'Mental health check-ins',
              'Maintain healthy weight'
            ],
            testsToRun: [
              'Pap smear (starting at 21)',
              'STI screening if sexually active',
              'Cholesterol screening',
              'Blood pressure monitoring'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Proactive Prevention',
            description: 'Focus on prevention and family planning considerations',
            recommendations: [
              'Regular gynecological exams',
              'Preconception health if planning pregnancy',
              'Skin cancer prevention',
              'Cardiovascular health focus',
              'Bone health awareness'
            ],
            testsToRun: [
              'Mammogram baseline (35+)',
              'Bone density scan if risk factors',
              'Thyroid function test',
              'Diabetes screening'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Midlife Health Management',
            description: 'Address changing health needs and hormonal changes',
            recommendations: [
              'Perimenopause awareness',
              'Heart health priority',
              'Regular cancer screenings',
              'Mental health support',
              'Eye health monitoring'
            ],
            testsToRun: [
              'Annual mammograms',
              'Colonoscopy (45+)',
              'Eye exam with dilated pupils',
              'Cardiac stress test if indicated'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Menopause & Beyond',
            description: 'Navigate menopause and age-related health changes',
            recommendations: [
              'Menopause management',
              'Osteoporosis prevention',
              'Cancer vigilance',
              'Cognitive health',
              'Sleep quality focus'
            ],
            testsToRun: [
              'Bone density scan',
              'Comprehensive metabolic panel',
              'Skin cancer screening',
              'Hearing test'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Healthy Aging',
            description: 'Maintain independence and quality of life',
            recommendations: [
              'Fall prevention',
              'Medication management',
              'Social connection maintenance',
              'Physical activity adaptation',
              'Regular health monitoring'
            ],
            testsToRun: [
              'Annual comprehensive exam',
              'Vision screening for age-related changes',
              'Balance and mobility assessment',
              'Cognitive screening'
            ]
          }
        ]
      },
      {
        id: 'nutrition',
        name: 'Nutrition',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Growing Strong',
            description: 'Fuel your growing body with proper nutrition',
            recommendations: [
              'Eat regular, balanced meals',
              'Include calcium-rich foods for bone development',
              'Learn to cook basic healthy meals',
              'Stay hydrated',
              'Limit processed foods and sugary drinks'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Building Healthy Habits',
            description: 'Establish lifelong healthy eating patterns',
            recommendations: [
              'Plan and prep meals',
              'Learn to read nutrition labels',
              'Include omega-3 fatty acids',
              'Maintain steady energy with balanced meals',
              'Consider vitamin D supplementation'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Fertility & Family Nutrition',
            description: 'Support reproductive health and family nutrition needs',
            recommendations: [
              'Folic acid if planning pregnancy',
              'Iron-rich foods for menstrual health',
              'Antioxidant-rich foods',
              'Meal planning for busy lifestyle',
              'Calcium and vitamin D for bone health'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Metabolic Health Focus',
            description: 'Address changing metabolism and hormonal needs',
            recommendations: [
              'Manage portion sizes as metabolism slows',
              'Increase fiber intake',
              'Focus on heart-healthy fats',
              'Support hormonal balance with nutrition',
              'Stay hydrated for skin and energy'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Menopause Nutrition',
            description: 'Support your body through menopause with proper nutrition',
            recommendations: [
              'Phytoestrogen-rich foods',
              'Calcium and vitamin D for bone health',
              'Manage weight gain tendency',
              'Anti-inflammatory foods',
              'Heart-healthy eating patterns'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Aging Well Nutrition',
            description: 'Maintain health and vitality through nutrition',
            recommendations: [
              'Protein for muscle maintenance',
              'Easily digestible foods',
              'Nutrient-dense choices',
              'Stay socially connected through meals',
              'Consider supplementation needs'
            ]
          }
        ]
      },
      {
        id: 'mental-health',
        name: 'Mental Health',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Emotional Development',
            description: 'Navigate emotional changes and build coping skills',
            recommendations: [
              'Learn healthy coping mechanisms',
              'Build strong support networks',
              'Practice stress management',
              'Understand emotional changes',
              'Seek help when needed'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Independence & Identity',
            description: 'Build emotional resilience and identity',
            recommendations: [
              'Develop emotional intelligence',
              'Practice mindfulness and meditation',
              'Build healthy relationships',
              'Manage work-life balance',
              'Address anxiety and depression early'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Life Balance',
            description: 'Manage multiple responsibilities and maintain mental health',
            recommendations: [
              'Stress management techniques',
              'Time management skills',
              'Maintain personal identity',
              'Seek therapy when beneficial',
              'Practice self-compassion'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Midlife Mental Health',
            description: 'Navigate midlife changes and maintain psychological well-being',
            recommendations: [
              'Address midlife transitions',
              'Manage caregiver stress',
              'Maintain sense of purpose',
              'Process life changes',
              'Consider hormonal impacts on mood'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Transition & Growth',
            description: 'Embrace life transitions and continue personal growth',
            recommendations: [
              'Navigate empty nest syndrome',
              'Explore new interests and passions',
              'Address menopause-related mood changes',
              'Maintain cognitive health',
              'Build resilience for aging'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Wisdom & Well-being',
            description: 'Maintain mental acuity and emotional well-being',
            recommendations: [
              'Stay mentally active',
              'Maintain social connections',
              'Practice gratitude and acceptance',
              'Address grief and loss',
              'Find meaning and purpose in later life'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: '💰',
    color: '#4ECDC4',
    subcategories: [
      {
        id: 'budgeting',
        name: 'Budgeting & Saving',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Money Basics',
            description: 'Learn fundamental money management skills',
            recommendations: [
              'Open a savings account',
              'Learn to budget allowance/part-time job income',
              'Understand needs vs wants',
              'Start learning about compound interest',
              'Practice delayed gratification'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Financial Independence',
            description: 'Build foundation for financial independence',
            recommendations: [
              'Create and stick to a budget',
              'Build emergency fund (3-6 months expenses)',
              'Pay off high-interest debt',
              'Start investing early',
              'Track expenses and income'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Wealth Building',
            description: 'Focus on building wealth and major financial goals',
            recommendations: [
              'Increase savings rate',
              'Diversify investments',
              'Consider homeownership',
              'Plan for family expenses',
              'Review and optimize expenses regularly'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Peak Earning Optimization',
            description: 'Maximize earning potential and accelerate savings',
            recommendations: [
              'Maximize retirement contributions',
              'Consider tax-advantaged accounts',
              'Plan for children\'s education costs',
              'Review insurance needs',
              'Consider estate planning'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Pre-Retirement Planning',
            description: 'Prepare financially for retirement transition',
            recommendations: [
              'Catch-up retirement contributions',
              'Pay off mortgage before retirement',
              'Estimate retirement expenses',
              'Consider healthcare costs',
              'Review social security benefits'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Retirement Management',
            description: 'Manage finances in retirement',
            recommendations: [
              'Create retirement withdrawal strategy',
              'Optimize social security timing',
              'Manage healthcare expenses',
              'Consider long-term care insurance',
              'Plan for legacy and estate'
            ]
          }
        ]
      },
      {
        id: 'investing',
        name: 'Investing',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Investment Basics',
            description: 'Learn investing fundamentals',
            recommendations: [
              'Understand compound interest',
              'Learn about different investment types',
              'Start with low-cost index funds',
              'Understand risk vs return',
              'Consider custodial investment accounts'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Growth Focused',
            description: 'Take advantage of time horizon for growth',
            recommendations: [
              'Contribute to 401(k) with employer match',
              'Open Roth IRA',
              'Invest in growth-oriented portfolios',
              'Learn about asset allocation',
              'Automate investments'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Diversified Growth',
            description: 'Build diversified investment portfolio',
            recommendations: [
              'Increase investment contributions',
              'Diversify across asset classes',
              'Consider real estate investment',
              'Review and rebalance portfolio',
              'Invest in professional development'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Balanced Approach',
            description: 'Balance growth with some stability',
            recommendations: [
              'Gradually reduce portfolio risk',
              'Consider target-date funds',
              'Maximize tax-advantaged accounts',
              'Review beneficiaries',
              'Consider financial advisor consultation'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Conservative Shift',
            description: 'Shift towards more conservative investments',
            recommendations: [
              'Reduce equity allocation gradually',
              'Focus on capital preservation',
              'Consider bond investments',
              'Plan investment withdrawal strategy',
              'Review all retirement accounts'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Income Generation',
            description: 'Focus on generating retirement income',
            recommendations: [
              'Create income-generating portfolio',
              'Consider dividend-paying stocks',
              'Manage withdrawal rates',
              'Maintain some growth investments',
              'Review estate planning regularly'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'social',
    name: 'Social',
    icon: '👥',
    color: '#FFD93D',
    subcategories: [
      {
        id: 'relationships',
        name: 'Relationships',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Building Social Skills',
            description: 'Develop healthy relationship patterns',
            recommendations: [
              'Learn healthy communication skills',
              'Understand consent and boundaries',
              'Build diverse friendships',
              'Navigate peer pressure',
              'Develop empathy and emotional intelligence'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Adult Relationships',
            description: 'Navigate adult relationships and partnerships',
            recommendations: [
              'Build intimate relationship skills',
              'Maintain friendships despite busy schedules',
              'Learn conflict resolution',
              'Establish healthy boundaries',
              'Consider relationship counseling when needed'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Partnership & Family',
            description: 'Focus on long-term partnerships and family building',
            recommendations: [
              'Nurture long-term partnership',
              'Navigate marriage and commitment',
              'Balance couple time with other relationships',
              'Consider family planning together',
              'Maintain individual identity in partnership'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Family & Community',
            description: 'Manage family relationships and community involvement',
            recommendations: [
              'Navigate parenting challenges together',
              'Maintain couple relationship amid family demands',
              'Build community connections',
              'Support aging parents',
              'Model healthy relationships for children'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Relationship Evolution',
            description: 'Adapt relationships through life transitions',
            recommendations: [
              'Navigate empty nest changes',
              'Rediscover partnership after child-rearing',
              'Maintain friendships through transitions',
              'Support adult children appropriately',
              'Consider caregiving roles'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Lasting Connections',
            description: 'Maintain meaningful relationships in later life',
            recommendations: [
              'Prioritize quality relationships',
              'Stay connected with family and friends',
              'Navigate loss and grief together',
              'Consider companionship needs',
              'Pass wisdom to younger generations'
            ]
          }
        ]
      },
      {
        id: 'networking',
        name: 'Professional Network',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Early Network Building',
            description: 'Start building professional connections',
            recommendations: [
              'Connect with teachers and mentors',
              'Join clubs and organizations',
              'Volunteer in areas of interest',
              'Attend career fairs and events',
              'Build online professional presence'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Career Network',
            description: 'Build professional network for career growth',
            recommendations: [
              'Connect with colleagues and industry professionals',
              'Join professional associations',
              'Attend networking events',
              'Find mentors in your field',
              'Offer help and support to others'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Strategic Networking',
            description: 'Leverage network for career advancement',
            recommendations: [
              'Maintain regular contact with network',
              'Seek leadership roles in professional organizations',
              'Mentor younger professionals',
              'Expand network across industries',
              'Use network for career opportunities'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Leadership Network',
            description: 'Build networks that support leadership roles',
            recommendations: [
              'Connect with other leaders and executives',
              'Join boards and advisory roles',
              'Speak at industry events',
              'Mentor and sponsor others',
              'Build cross-functional networks'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Legacy Building',
            description: 'Use network to build lasting professional legacy',
            recommendations: [
              'Share expertise and knowledge',
              'Connect others within your network',
              'Consider consulting or advisory roles',
              'Sponsor women in leadership',
              'Prepare for potential career transitions'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Wisdom Sharing',
            description: 'Share professional wisdom and experience',
            recommendations: [
              'Mentor emerging professionals',
              'Share knowledge through speaking/writing',
              'Stay connected to industry developments',
              'Consider part-time or consulting roles',
              'Support causes important to you'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'self-care',
    name: 'Self-Care',
    icon: '🌸',
    color: '#B19CD9',
    subcategories: [
      {
        id: 'personal-development',
        name: 'Personal Development',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Self-Discovery',
            description: 'Discover your interests, values, and identity',
            recommendations: [
              'Explore different interests and hobbies',
              'Read books that challenge your thinking',
              'Try new activities and experiences',
              'Keep a journal for self-reflection',
              'Set personal goals and work towards them'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Skill Building',
            description: 'Develop skills and establish personal values',
            recommendations: [
              'Continue learning through courses and workshops',
              'Develop both hard and soft skills',
              'Build confidence through achievements',
              'Practice self-reflection and mindfulness',
              'Establish personal boundaries and values'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Authentic Living',
            description: 'Live authentically and pursue meaningful goals',
            recommendations: [
              'Align actions with personal values',
              'Pursue meaningful goals and challenges',
              'Practice self-advocacy and assertiveness',
              'Develop leadership skills',
              'Maintain growth mindset'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Wisdom & Purpose',
            description: 'Find deeper purpose and share wisdom',
            recommendations: [
              'Reflect on life purpose and meaning',
              'Share knowledge and mentor others',
              'Pursue passion projects',
              'Practice gratitude and appreciation',
              'Develop emotional maturity'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Reinvention & Growth',
            description: 'Embrace new chapters and continued growth',
            recommendations: [
              'Explore new interests and passions',
              'Consider career or life transitions',
              'Practice acceptance of change',
              'Focus on personal fulfillment',
              'Develop resilience and adaptability'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Legacy & Fulfillment',
            description: 'Focus on legacy and personal fulfillment',
            recommendations: [
              'Share wisdom and life experiences',
              'Focus on relationships and connections',
              'Practice acceptance and contentment',
              'Consider your legacy and impact',
              'Embrace the wisdom of aging'
            ]
          }
        ]
      },
      {
        id: 'stress-management',
        name: 'Stress Management',
        ageSpecificGuidance: [
          {
            ageGroupId: 'teens',
            title: 'Coping Skills',
            description: 'Learn healthy ways to manage stress and pressure',
            recommendations: [
              'Practice deep breathing exercises',
              'Develop time management skills',
              'Learn to say no to excessive commitments',
              'Find healthy outlets for emotions',
              'Build strong support systems'
            ]
          },
          {
            ageGroupId: 'twenties',
            title: 'Work-Life Balance',
            description: 'Manage career pressures and life transitions',
            recommendations: [
              'Establish work-life boundaries',
              'Practice regular exercise for stress relief',
              'Develop mindfulness or meditation practice',
              'Maintain social connections',
              'Learn when to seek professional help'
            ]
          },
          {
            ageGroupId: 'thirties',
            title: 'Multiple Responsibilities',
            description: 'Balance career, relationships, and personal needs',
            recommendations: [
              'Prioritize and delegate when possible',
              'Schedule regular downtime',
              'Practice stress-reduction techniques',
              'Maintain perspective on what matters most',
              'Create support systems for busy periods'
            ]
          },
          {
            ageGroupId: 'forties',
            title: 'Midlife Pressures',
            description: 'Manage the sandwich generation and midlife stress',
            recommendations: [
              'Address caregiver stress proactively',
              'Maintain personal interests and hobbies',
              'Practice self-compassion',
              'Seek support for overwhelming responsibilities',
              'Focus on what you can control'
            ]
          },
          {
            ageGroupId: 'fifties',
            title: 'Transition Management',
            description: 'Navigate major life transitions with grace',
            recommendations: [
              'Embrace change as opportunity',
              'Process emotions around transitions',
              'Maintain routines that ground you',
              'Seek support during major changes',
              'Practice patience with yourself'
            ]
          },
          {
            ageGroupId: 'sixties-plus',
            title: 'Peaceful Aging',
            description: 'Find peace and contentment in later life',
            recommendations: [
              'Accept physical and life changes',
              'Focus on gratitude and appreciation',
              'Maintain routines that bring joy',
              'Stay connected with loved ones',
              'Practice mindfulness and presence'
            ]
          }
        ]
      }
    ]
  }
];