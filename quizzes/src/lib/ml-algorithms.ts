const ML_ALGORITHM_DATA: { name: string; accept: string[] }[] = [
  // Supervised Learning
  { name: 'Linear Regression',           accept: ['linear regression', 'linear reg', 'linreg'] },
  { name: 'Logistic Regression',         accept: ['logistic regression', 'logistic reg', 'logreg'] },
  { name: 'Decision Tree',               accept: ['decision tree', 'decision trees', 'cart'] },
  { name: 'Random Forest',               accept: ['random forest', 'random forests', 'rf'] },
  { name: 'Gradient Boosting',           accept: ['gradient boosting', 'gradient boosted trees', 'gbm', 'gbt'] },
  { name: 'Support Vector Machine',      accept: ['support vector machine', 'support vector machines', 'svm', 'svr', 'svc'] },
  { name: 'K-Nearest Neighbors',         accept: ['k-nearest neighbors', 'k nearest neighbors', 'knn', 'k-nn', 'knearest neighbors', 'nearest neighbors'] },
  { name: 'Naive Bayes',                 accept: ['naive bayes', 'naïve bayes', 'naive bayes classifier'] },
  { name: 'Ridge Regression',            accept: ['ridge regression', 'ridge', 'l2 regression', 'tikhonov regularization'] },
  { name: 'Lasso Regression',            accept: ['lasso regression', 'lasso', 'l1 regression'] },
  { name: 'Elastic Net',                 accept: ['elastic net', 'elasticnet', 'elastic net regression'] },
  { name: 'AdaBoost',                    accept: ['adaboost', 'ada boost', 'adaptive boosting'] },
  { name: 'XGBoost',                     accept: ['xgboost', 'xgb', 'extreme gradient boosting'] },
  { name: 'LightGBM',                    accept: ['lightgbm', 'light gbm', 'light gradient boosting'] },
  // Unsupervised Learning
  { name: 'K-Means Clustering',          accept: ['k-means clustering', 'k means clustering', 'k-means', 'kmeans'] },
  { name: 'Hierarchical Clustering',     accept: ['hierarchical clustering', 'hierarchical', 'agglomerative clustering', 'dendrogram'] },
  { name: 'DBSCAN',                      accept: ['dbscan', 'density-based spatial clustering', 'density based spatial clustering'] },
  { name: 'Principal Component Analysis', accept: ['principal component analysis', 'pca', 'principal components'] },
  { name: 'Gaussian Mixture Model',      accept: ['gaussian mixture model', 'gmm', 'gaussian mixture', 'mixture of gaussians'] },
  { name: 't-SNE',                       accept: ['t-sne', 'tsne', 't sne', 'stochastic neighbor embedding'] },
  { name: 'UMAP',                        accept: ['umap', 'uniform manifold approximation'] },
  { name: 'Isolation Forest',            accept: ['isolation forest', 'iforest'] },
  { name: 'Apriori',                     accept: ['apriori', 'a priori', 'association rule learning'] },
  { name: 'Autoencoders',                accept: ['autoencoders', 'autoencoder', 'ae'] },
  // Reinforcement Learning
  { name: 'Q-Learning',                  accept: ['q-learning', 'q learning', 'qlearning'] },
  { name: 'Deep Q-Network',              accept: ['deep q-network', 'deep q network', 'dqn'] },
  { name: 'Policy Gradient',             accept: ['policy gradient', 'policy gradients', 'pg', 'reinforce'] },
  { name: 'Actor-Critic',                accept: ['actor-critic', 'actor critic', 'a2c', 'advantage actor critic'] },
  { name: 'Proximal Policy Optimization', accept: ['proximal policy optimization', 'ppo'] },
  { name: 'SARSA',                       accept: ['sarsa', 'state-action-reward-state-action'] },
  { name: 'Multi-Armed Bandit',          accept: ['multi-armed bandit', 'multi armed bandit', 'bandit algorithm', 'mab'] },
  { name: 'Monte Carlo Tree Search',     accept: ['monte carlo tree search', 'mcts', 'monte carlo search'] },
  // Deep Learning
  { name: 'Convolutional Neural Network', accept: ['convolutional neural network', 'convolutional neural networks', 'cnn', 'convnet', 'conv net'] },
  { name: 'Recurrent Neural Network',    accept: ['recurrent neural network', 'recurrent neural networks', 'rnn'] },
  { name: 'Long Short-Term Memory',      accept: ['long short-term memory', 'lstm', 'long short term memory'] },
  { name: 'Transformer',                 accept: ['transformer', 'transformers', 'attention mechanism', 'self-attention'] },
  { name: 'Generative Adversarial Network', accept: ['generative adversarial network', 'generative adversarial networks', 'gan', 'gans'] },
  { name: 'Variational Autoencoder',     accept: ['variational autoencoder', 'variational autoencoders', 'vae'] },
  { name: 'BERT',                        accept: ['bert', 'bidirectional encoder representations from transformers'] },
  { name: 'ResNet',                      accept: ['resnet', 'residual network', 'residual neural network', 'res net'] },
  { name: 'Diffusion Model',             accept: ['diffusion model', 'diffusion models', 'ddpm', 'score-based model'] },
  { name: 'Graph Neural Network',        accept: ['graph neural network', 'graph neural networks', 'gnn', 'gcn', 'graph convolutional network'] },
];

const ML_MAP = new Map<string, string>();
ML_ALGORITHM_DATA.forEach(a => a.accept.forEach(s => ML_MAP.set(s, a.name)));

export const ML_ALGORITHMS = ML_ALGORITHM_DATA.map(a => a.name);

export const ML_SECTIONS: { header: string; algorithms: string[] }[] = [
  { header: 'Supervised Learning',     algorithms: ['Linear Regression', 'Logistic Regression', 'Decision Tree', 'Random Forest', 'Gradient Boosting', 'Support Vector Machine', 'K-Nearest Neighbors', 'Naive Bayes', 'Ridge Regression', 'Lasso Regression', 'Elastic Net', 'AdaBoost', 'XGBoost', 'LightGBM'] },
  { header: 'Unsupervised Learning',   algorithms: ['K-Means Clustering', 'Hierarchical Clustering', 'DBSCAN', 'Principal Component Analysis', 'Gaussian Mixture Model', 't-SNE', 'UMAP', 'Isolation Forest', 'Apriori', 'Autoencoders'] },
  { header: 'Reinforcement Learning',  algorithms: ['Q-Learning', 'Deep Q-Network', 'Policy Gradient', 'Actor-Critic', 'Proximal Policy Optimization', 'SARSA', 'Multi-Armed Bandit', 'Monte Carlo Tree Search'] },
  { header: 'Deep Learning',           algorithms: ['Convolutional Neural Network', 'Recurrent Neural Network', 'Long Short-Term Memory', 'Transformer', 'Generative Adversarial Network', 'Variational Autoencoder', 'BERT', 'ResNet', 'Diffusion Model', 'Graph Neural Network'] },
];

export function matchMLAlgorithm(guess: string): string | null {
  return ML_MAP.get(guess.trim().toLowerCase()) ?? null;
}
